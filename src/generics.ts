function copy<T extends { gree: string }>(value: T): T {
  return value;
}
console.log(copy({ gree: 'hello' }));

// classでのジェネリクス
class LightDatabase<T extends string | number | boolean>{
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }
  get() {
    return this.data;
  }
}
// 文字列で固定
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());