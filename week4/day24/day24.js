const student = { name: "Mani", school: { city: "Madurai" } };

console.log(student.school?.city); // "Madurai" — school exists, so .city works
console.log(student.college?.city); // undefined — college doesn't exist, but no crash
console.log(student?.name);

//nullish Coalescing

let a = 0;
let b = null;
let c = undefined;
let d = "hello";

console.log(a ?? "fallback"); // 0 — a is a real value (0), not null/undefined, so no fallback
console.log(b ?? "fallback"); // "fallback" — b is null, fallback kicks in
console.log(c ?? "fallback"); // "fallback" — c is undefined, fallback kicks in
console.log(d ?? "fallback"); // "hello" — d already has a value, no fallback needed

//compare with ||

console.log(a || "fallback"); // "fallback" — WRONG if 0 was meant to be valid! || treats 0 as falsy
console.log(a ?? "fallback"); // 0 — RIGHT — ?? only checks for null/undefined, not "falsy in general"

//small task

const company = { name: "TechCorp", ceo: { name: "Arun" } };

console.log(company.ceo?.name);
console.log(company.hr?.name);

//medium task

const settings = { volume: 0, brightness: null, username: "" };

console.log(settings?.volume ?? "Default Volume");
console.log(settings?.volume || "Default Volume");
console.log(settings?.brightness ?? "Default Brightness");
console.log(settings?.brightness || "Default Brightness");
console.log(settings?.username??"Default Username");
console.log(settings?.username||"Default Username");


