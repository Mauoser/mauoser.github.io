import { MoonIcon, SunIcon } from "./Icons";

/**
 * One button: dark theme on or off. It needs no React: the inline script in
 * the layout's <head> applies a saved choice before the first paint (so the
 * page never flashes the other theme), handles the press, and keeps
 * aria-pressed true to what is showing. So it works the moment the page draws,
 * before any JavaScript bundle has loaded. With no choice saved, the site
 * follows the operating system; choosing what the system already shows clears
 * the choice. Both icons are in the markup and CSS shows the right one.
 */
export function ThemeToggle() {
  return (
    <button type="button" className="theme-toggle" aria-label="Dark theme" suppressHydrationWarning>
      <MoonIcon />
      <SunIcon />
    </button>
  );
}

export const themeScript = `(function(){
var d=document.documentElement,K="theme",mq=window.matchMedia("(prefers-color-scheme: dark)");
try{var t=localStorage.getItem(K);if(t==="dark"||t==="light")d.dataset.theme=t;}catch(e){}
function dark(){var t=d.dataset.theme;return t?t==="dark":mq.matches;}
function sync(){var b=document.querySelectorAll(".theme-toggle"),on=dark();for(var i=0;i<b.length;i++){b[i].setAttribute("aria-pressed",on?"true":"false");b[i].title=on?"Switch to the light theme":"Switch to the dark theme";}}
document.addEventListener("click",function(e){var b=e.target&&e.target.closest&&e.target.closest(".theme-toggle");if(!b)return;var next=!dark();
if(next===mq.matches){delete d.dataset.theme;try{localStorage.removeItem(K);}catch(x){}}
else{d.dataset.theme=next?"dark":"light";try{localStorage.setItem(K,d.dataset.theme);}catch(x){}}sync();});
if(mq.addEventListener)mq.addEventListener("change",sync);
document.addEventListener("DOMContentLoaded",sync);
})();`;
