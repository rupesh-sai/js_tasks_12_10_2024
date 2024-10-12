const URL = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true';

const fetchData = async (URL)=>{
   const resp = await fetch(URL);
   const data = await resp.json();
   return data;
}


const display = (data)=>{
   const weather = document.getElementsByClassName('weather-report')[0];
   const fragment = document.createDocumentFragment();
   const p1 = document.createElement('p');
   p1.classList.add('temperature', 'weather-info');
   
   const p2 = document.createElement('p');
   p2.classList.add('wind-speed', 'weather-info');
   const p3 = document.createElement('p');
   p3.classList.add('weather-code', 'weather-info');
   const p4 = document.createElement('p');
   p4.classList.add('observation-time', 'weather-info');
   console.log(data)
   p1.append( `Temperature : ${data.current_weather.temperature} °C`);
   p2.append( `Windspeed : ${data.current_weather.windspeed} km/h`);
   p3.append(`Weathercode : ${data.current_weather.weathercode}`);
   p4.append(`Observation time: ${new Date(data.current_weather.time).toLocaleString()}`);
   fragment.append(p1, p2, p3, p4);
   weather.appendChild(fragment);

}

const main = (URL)=>{
    fetchData(URL).then((data)=>{
        display(data);
    })
}
main(URL)