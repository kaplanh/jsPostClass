//? ES Modules nedir?
//* ES Modules (Ecmascript modülleri) JavaScript için bir import mekanizması sağlar. Bu mekanizma sayesinde farklı dosyalar içerisinde yer alan kodlar, diğer dosyalarda import ederek tekrar kullanılabilir hale gelmektedir.

//? Örnek bir ES module
// *Bir ES modülü aşağıdaki gibi bir veya daha fazla export ifadesi içeren değişkenkler/fonksiyonlardan oluşur:

// utils.js

// Named export
export function helloNamed() {
  return "Hello named export!";
}
// Değişkenler de named export olarak kullanılabilir
export const name = 'Zafer';

// Default export
export default function helloDefault() {
  return "Hello default export!";
}

//? Her fonksiyonda export ifadesi kullanmadan, 
// ?  tek seferde de export edilebilir
//! export { helloNamed, name, helloDefault };
// ?Burada da görüleceği gibi export ve export default ifadeleri bulunmaktadır. Bu ifadelere sırasıyla named export ve default export da denmektedir. Named export sadece belirlenen isimle kullanılabilirken, default export’ta ilgili fonksiyona herhangi bir isim verilebilir.