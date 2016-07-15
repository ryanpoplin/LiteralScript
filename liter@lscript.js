/* Liter@lScript */

// # auto constants

// f@{Page(content)[
//     p@content
// ]}
const Page = (content) => {
    this.content = content;
};

// # a comment for Liter@lScript
// # a multi-line
// comment for Liter@lScript #

// f@{Page}proto@{[
//     m@render() <- '<div>t@p@content@t</div>'
// ]}
Page.prototype.render = function () {
    return `<div>${this.content}</div>`;
};

// f@{Post(tags, content)[
//     p@tags
//     # figure this syntax out
//     c@f@{Page}|content|
// ]}
const Post = (tags, content) => {
    this.tags = tags;
    // what's this doing for me?
    Page.call(this, content);
};

// f@{Post}proto@{[
//     init@{Page('initialize a Page function object')}
// ]}
Post.prototype = new Page('new Page');

// @f{post} <= init@f@{Post(['good', 'bad', 'ugly'], 'Here is some awesome content...')}
const post = new Post(['good', 'bad', 'ugly'], 'Here is some awesome content...');

// log@f@{post}
console.log(post);
