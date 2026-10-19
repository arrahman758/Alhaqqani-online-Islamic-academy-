// واٹس ایپ نمبر یہاں بدلیں (ملکی کوڈ کے ساتھ، بغیر + اور صفر کے). مثال: 923479924883
const WA_NUMBER = "923479924883";
const url = t => "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(t);
document.querySelectorAll("[data-wa]").forEach(a => { a.href = url("السلام علیکم، میں داخلہ کے بارے میں معلومات چاہتا/چاہتی ہوں۔"); a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll("[data-course]").forEach(a => { a.href = url("السلام علیکم، میں " + a.dataset.course + " میں داخلہ کے بارے میں معلومات چاہتا/چاہتی ہوں۔"); });
document.querySelectorAll(".cc").forEach(c => c.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(); c.style.setProperty("--x", (e.clientX - r.left) + "px"); c.style.setProperty("--y", (e.clientY - r.top) + "px"); }));
const b = document.querySelector(".burger"), n = document.getElementById("nav");
b.addEventListener("click", () => { const o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
const f = document.getElementById("f");
if (f) f.addEventListener("submit", e => { e.preventDefault(); const d = new FormData(f);
  window.open(url("السلام علیکم\nنام: " + d.get("n") + "\nکورس: " + d.get("c") + "\n" + (d.get("m") || "")), "_blank"); });
