console.log('i am avi');
// array of objrct which contain informatiom
const data = [
    {
        name: 'Ravi Singh',
        age: '18',
        city: 'kolkata',
        framework: 'Sql',
        image: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
    {
        name: 'avinash pandey',
        age: '18',
        city: 'delhi',
        framework: 'Sql',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
        name: 'Ravi das',
        age: '34',
        city: 'kota',
        framework: 'php',
        image: 'https://randomuser.me/api/portraits/men/12.jpg',

    },

    {
        name: 'Vani kappor',
        age: '20',
        city: 'chandigarh',
        framework: 'node.js',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        name: 'Ankita Singh',
        age: '32',
        city: 'hydrabad',
        framework: 'python',

        image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        name: 'Ravi Singh',
        age: '33',
        city: 'mumbai',
        framework: 'node.js',
        image: 'https://randomuser.me/api/portraits/men/74.jpg',
    },
]

function cvitrators(profile) {
    let nextindex = 0;
    return {
        next: function () {
            return nextindex < profile.length ?
                { value: profile[nextindex++], done: false } :
                { done: true }
        }
    };
}

const candidates = cvitrators(data);
nextCv();

const  next = document.getElementById('next');
next.addEventListener('click', nextCv);


function nextCv() {
    const currentcandidate = candidates.next().value;
    let image = document.getElementById('image')
    let profile = document.getElementById('profile');
    if(currentcandidate!=undefined){
    image.innerHTML = `<img src='${currentcandidate.image}'>`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name:${currentcandidate.name}</li>
  
    <li class="list-group-item ">${currentcandidate.age}</li>
    <li class="list-group-item">Live in:${currentcandidate.city}</li>
    <li class="list-group-item"> with ${currentcandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('end of applications');
        window.location.reload();
    }
}