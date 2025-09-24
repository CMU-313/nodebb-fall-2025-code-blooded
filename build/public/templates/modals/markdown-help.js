
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<h2>Markdown</h2>\n<p>[[markdown:help-text]]</p>\n<table class=\"table markdown-reference\">\n<thead>\n<tr>\n<th>Type</th>\n<th>… to Get</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class=\"preformatted\">*Italic*</td>\n<td><em>Italic</em></td>\n</tr>\n<tr>\n<td class=\"preformatted\">**Bold**</td>\n<td><strong>Bold</strong></td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n# Heading 1\n</td>\n<td>\n<h1 class=\"smaller-h1\">Heading 1</h1>\n</td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n## Heading 2\n</td>\n<td>\n<h2 class=\"smaller-h2\">Heading 2</h2>\n</td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n[Link](http://a.com)\n</td>\n<td><a href=\"https://commonmark.org/\">Link</a></td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n![Image](http://url/a.png)\n</td>\n<td>\n<img src=\"/assets/logo.png\" width=\"auto\" height=\"36\" alt=\"NodeBB Logo\">\n</td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n&gt; Blockquote\n</td>\n<td>\n<blockquote>Blockquote</blockquote>\n</td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n<p>\n* List<br>\n* List<br>\n* List\n</p>\n</td>\n<td>\n<ul>\n<li>List</li>\n<li>List</li>\n<li>List</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n<p>\n1. One<br>\n2. Two<br>\n3. Three\n</p>\n</td>\n<td>\n<ol>\n<li>One</li>\n<li>Two</li>\n<li>Three</li>\n</ol>\n</td>\n</tr>\n<tr>\n<td class=\"preformatted\">\nHorizontal rule:<br>\n<br>\n---\n</td>\n<td>\nHorizontal rule:\n<hr class=\"custom-hr\">\n</td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n`Inline code` with backticks\n</td>\n<td>\n<code class=\"preformatted\">Inline code</code> with backticks\n</td>\n</tr>\n<tr>\n<td class=\"preformatted\">\n```<br>\n# code block<br>\nprint '3 backticks or'<br>\nprint 'indent 4 spaces'<br>\n```\n</td>\n<td>\n<pre class=\"code-block text-nowrap\">\n# code block\n<br> print '3 backticks or'\n<br> print 'indent 4 spaces'\n</pre>\n</td>\n</tr>\n</tbody>\n</table>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
