window.clipboard=()=>({copying:!1,notSupported:!1,copy(e){this.copying=!0;const t=window.navigator.clipboard;t&&window.isSecureContext?t.writeText(e).then((()=>this.copying=!1),(()=>{this.copying=!1,console.error("Failed to copy contents to the clipboard.")})):(console.warn("Using fallback due to lack of navigator support or HTTPS in this browser"),this.copyUsingExec(e))},copyUsingExec(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:absolute;top:0;left:0;z-index:-9999;opacity:0;fontSize:12pt;",this.$root.append(t);if(navigator.userAgent.match(/ipad|iphone/i)){const e=t.contentEditable,o=t.readOnly;t.contentEditable="true",t.readOnly=!1;const n=document.createRange();n.selectNodeContents(t);const c=window.getSelection();c&&(c.removeAllRanges(),c.addRange(n)),t.setSelectionRange(0,999999),t.contentEditable=e,t.readOnly=o}else t.select(),t.focus();this.copying=!0,setTimeout((()=>this.copying=!1),1200),document.execCommand("copy"),t.remove()},copyFromInput(e){const t=document.querySelector(e);this.copy(t.value)}});