console.log('Hello!');
const uid = new URL(window.location).searchParams.get('userid');
document.getElementById('uid').innerHTML = `User id is ${uid}`;