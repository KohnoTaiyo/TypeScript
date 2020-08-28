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

function toUpperCase(x: string | Number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}

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