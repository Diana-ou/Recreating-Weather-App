import sunny from '../assets/images/sunny.png';
import sun from '../assets/images/sunny.png';
import cloudy from '../assets/images/cloudy.png';
import rainy from '../assets/images/rainy.png';
import snowy from '../assets/images/snowy.png';


// Referenced this tutorial for the foundations: https://www.youtube.com/watch?v=-mC7jS0EplM&t=659s&ab_channel=CodeAndCreate

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="search">
          <div className="search-bar">
            <input type="text" placeholder="Enter Location" />
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="weather">
        <div className="image-container">
          <img src={sunny} alt="sunny" />
          <div className="temp">88°</div>
          <div className="weather-type">Clear</div>
          <div className="hour">9:58 AM</div>
          <div classname="time-marker">
            <i className="fa-solid fa-caret-down"></i>
          </div>
          
          <div class="scroll-container">
          <div class="tick-box">
            <div class="tick"></div>
            <div class="tick"></div>
            <div class="tick major-tick"></div>
            <div class="tick"></div>
            <div class="tick"></div>
            <div class="tick major-tick"></div>
            <div class="tick"></div>
            <div class="tick"></div>
          </div>
        </div>
        </div>
        </div>

        <div className="info-list">
          <div className="alert">
          <i class="fa-solid fa-circle-exclamation"></i>
          <div className="info-body"> Heatwave during your picnic at 3PM today. We recommend cancelling.</div>
          </div>
          <div className="recommendation">
          <i class="fa-solid fa-lightbulb"></i>
          <div className="info-body"> Clear skies tomorrow night at 9:00 PM. Schedule stargazing?</div>
          </div>
        </div>
        <div className="user-recommend">
          <p>90% of Users Recommend Wearing</p>
        </div>
        <div className="weather-data">
          <div className="top">
            <div className="data-name">T-shirt</div>
            <i class="fa-solid fa-shirt"></i>
          </div>
          <div className="wind">
            <div className="data-name">Sun hat</div>
            <i class="fa-solid fa-hat-cowboy"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
