/* Liter@lScript - Liter@lScript to ES6 */

// NOTE: auto constants
// foc@{Page(content):
//     p@content
// :}
const Page = function (content) {
    this.content = content;
    // this.test = 'test property...';
};

// # a comment for Liter@lScript
// # a multi-line
// comment for Liter@lScript #

// foc@{Page}proto@{:
//     m@render() <- '<div>t@p@content@t</div>'
// :}
Page.prototype.render = function () {
    return `<div>${this.content}</div>`;
};

// foc@{Post(tags, content):
//     p@tags
//     # |this, arg, x, y, z|
//     call@foc@{Page}|content, x, y, z|
// :}
const Post = function (tags, content) {
    this.tags = tags;
    // 'this' refers to the object that will be created when a new instance of this constructor function object when created.
    // when .call() passes 'this' and data in the scope of Post, Post will have the ability to reference data, properties and methods of Page.
    // now Post will have a 'content' property added to it's init. object via the Page.
    // memory-linkage
    Page.call(this, content);
};

// foc@{Post}proto@{::
//     init@{Page('initialize a Page function object')}
// ::}
Post.prototype = new Page('Page');
// console.log(Post.prototype);
// console.log(Post.__proto__);

// o@{post} <= init@foc@{Post(['good', 'bad', 'ugly'], 'Here is some awesome content...')}
// const post = new Post(['good', 'bad', 'ugly'], 'Post');

// log@o@{post}
// console.log(post);
// log@o@{post::m@render()::}
// console.log(post.render());

// foc@{Post}proto@{:
//     <- '<ul>t@call@foc@{Page::
//                 m@renderTags()
//             ::}@t</ul>t@
//             foc@{Page}proto@{::
//                 call@m@render()
//             ::}@t'
// :}
Post.prototype.render = function () {
    // NOTE: Polymorphism
    const page = Page.prototype.render.call(this);
    return `<ul>${this.renderTags()}</ul>${page}`;
};

// foc@{Post}proto@{:
//     <- '<li>foc@{Post::@join('</li><li>')@p@tags::}</li>'
// :}
Post.prototype.renderTags = function () {
    return `<li>${this.tags.join('</li><li>')}</li>`;
};

// NOTE: refer to previous LiteralScript code above for the syntax of the following 3 lines...
const page = new Page('Welcome to LiteralScript!');
const post = new Post(['langs', 'LiteralScript', 'JavaScript'], 'A new language...');
console.log(post.render());

class Page2 {
    constructor(content) {
        this.content = content;
    }
    render() {
        return `<div>${this.content}</div>`;
    }
}

class Post2 extends Page {
    constructor(tags, content) {
        super(content);
        this.tags = tags;
    }
    render() {
        const page = super.render();
        return `<ul>${this.renderTags()}</ul>${page}`;
    }
    renderTags() {
        return `<li>${this.tags.join('</li><li>')}</li>`;
    }
}

const page2 = new Page2('Welcome to LiteralScript, again...');
const post2 = new Post2(['news', 'booze', 'lose'], 'Some more awesome content...');
console.log(post2.render());
