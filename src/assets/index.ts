import RickAndMortyImage from "./projects/rick-and-morty-api.png";
import CepImage from "./projects/cep.png";
import SnapClima from "./projects/snapclima.png";
import RegisterUser from "./projects/register-user.png";
import DevBurgerImage from "./projects/devBurger.png";
import RealTimeChat from "./projects/real-time-chat.png";
import PomodoroApp from "./projects/pomodoro-app.png";

const images = {
  RickAndMortyImage,
  CepImage,
  SnapClima,
  RegisterUser,
  DevBurgerImage,
  RealTimeChat,
  PomodoroApp,
};

export type ImageKeys = keyof typeof images;

export default images;