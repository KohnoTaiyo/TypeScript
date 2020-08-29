interface Engineer {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}
interface EngineerBlogger extends Engineer, Blogger { }

const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

// 型のオーバーロード。条件式みたいな物。
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}
const upperHello = toUpperCase('hello');

// interface NomadWorker extends Engineer | Blogger {}
// | は使えない
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  // roleが入っているinterface
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
}
class Dog {
  speak() {
    console.log('bow-wow');
  }
}
class Bird {
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());//->tweet-tweet,flutter

const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1
}
// ?で値がなければundefinedを返す
console.log(downloadedData.user?.name?.first);

// 0の場合でも'no-user'になってしまう。
// const userData = downloadedData.user || 'no-user';
const userData = downloadedData.user ?? 'no-user';

// レストパラメータには配列で型を指定
function advancedFn(...args: number[]) { }
advancedFn(5, 2, 53, 4);

// 勝手にリードオンリーなども着くので、完全に固定できる。
const milk = 'milk' as const;
const array = [10, 20] as const;
const peter = {
  name: 'Peter',
  age: 38
} as const;
type PeterType = typeof peter;