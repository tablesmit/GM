// ==UserScript==
// @name					Open Discuz Link in new tab
// @description				Discuz论坛链接默认新标签页打开
// @include					http://*/forum-*-*
// @include					http://*/forum-*-*.html
// @include					http://*/showforum-*.html
// @include					http://*/forum.php?mod=forumdisplay*
// @include					http://*/forum/viewforum.php?f=*
// @include					http://*/forum/search.php?*
// @include					http://*/forumdisplay.php?f=
// @include					https://*/forum-*-*
// @include					https://*/forum-*-*.html
// @include					https://*/showforum-*.html
// @include					https://*/forum.php?mod=forumdisplay*
// @include					https://*/forum/viewforum.php?f=*
// @include					https://*/forum/search.php?*
// @include					https://*/forumdisplay.php?f=
// @namespace				Lkytal
// @author					lkytal
// @homepage				https://lkytal.github.io/
// @version					1.3.3
// @icon					http://lkytal.qiniudn.com/ic.ico
// @grant					unsafeWindow
// @run-at					document-end
// @homepageURL				https://git.oschina.net/coldfire/GM
// @updateURL				https://git.oschina.net/coldfire/GM/raw/master/meta/discuz_in_tab.meta.js
// @downloadURL				https://git.oschina.net/coldfire/GM/raw/master/discuz_in_tab.user.js
// ==/UserScript==

var x = document.getElementById("atarget");

if (x)
{
	//x.click();
	unsafeWindow.setatarget(1);
}
else
{
	var AFile = document.querySelectorAll('#threadlist tbody a, #threadslist tbody a');

	for (var i = AFile.length - 1; i > -1; i--)
	{
		AFile[i].setAttribute("target", "_blank");
	}
}
