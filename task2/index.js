const URL = 'https://randomuser.me/api/';

const fetchData = async (URL)=>{
   const resp = await fetch(URL);
   const data = await resp.json();
   return data;
}
const display = (data)=>{
    const user = data.results[0];
    const user_name = document.getElementById('name');
    const user_location = document.getElementById('location');
    const user_phone = document.getElementById('phone');
    const user_dob = document.getElementById('dob');
    const user_img = document.getElementById('user-image');
    const user_email = document.getElementById('email');

    user_name.textContent = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;
    user_location.textContent = `location: ${user.location.city}, ${user.location.country}`;
    user_email.textContent = `email: ${user.email}`;
    user_img.style.display = 'block';
    user_img.src = user.picture.large;
    user_phone.textContent=`Phone: ${user.phone}`;
    user_dob.textContent = `Date of Birth: ${new Date(user.dob.date).toLocaleString('en-US')}`
    console.log(user)
}

const main = (URL)=>{
    // console.log('kkk')
    fetchData(URL).then((data)=>{
        // console.log(data)
        display(data);
    })
}

main(URL);