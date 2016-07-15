/* Liter@lScript */

// # auto constants

// f@{Page(content):
//     p@content
// :}
const Page = function (content) {
    // console.log(content);
    this.content = content;
    // console.log(this.content);
};

// # a comment for Liter@lScript
// # a multi-line
// comment for Liter@lScript #

// f@{Page}proto@{:
//     m@render() <- '<div>t@p@content@t</div>'
// :}
Page.prototype.render = function () {
    return `<div>${this.content}</div>`;
};

// f@{Post(tags, content):
//     p@tags
//     # |this, arg, x, y, z|
//     c@f@{Page}|content, x, y, z|
// :}
const Post = function (tags, content) {
    this.tags = tags;
    // 'this' refers to the object that will be created when a new instance of this constructor function object when created.
    // when .call() passes 'this' and data in the scope of Post, Post will have the ability to reference data, properties and methods of Page.
    // now Post will have a 'content' property added to it's init. object via the Page.
    // memory-linkage
    Page.call(this, content);
};

// f@{Post}proto@{:
//     init@{Page('initialize a Page function object')}
// :}
Post.prototype = new Page('Page');
// console.log(Post.prototype);
// console.log(Post.__proto__);

// @f{post} <= init@f@{Post(['good', 'bad', 'ugly'], 'Here is some awesome content...')}
// const post = new Post(['good', 'bad', 'ugly'], 'Post');

// log@f@{post}
// console.log(post);
// log@f@{post::m@render()::}
// console.log(post.render());

// etc...
Post.prototype.render = function () {
    const page = Page.prototype.render.call(this);
    return `<ul>${this.renderTags()}</ul>${page}`;
};

Post.prototype.renderTags = function () {
    return `<li>${this.tags.join('</li><li>')}</li>`;
};

const page = new Page('Welcome to LiteralScript!');

const post = new Post(['langs', 'LiteralScript', 'JavaScript'], 'A new language...');

console.log(post.render());
