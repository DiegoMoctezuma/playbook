const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

console.log("----------------Nombre y Stack----------------");
explorers.forEach((item) => {
  console.log(`Nombre del Explorer: ${item.name}`);
  console.log(`Stack: ${item.stack[0]}`);
});

console.log("----------------Stacks de los Explorers----------------");
const stacksExplorers = explorers.map((item) => item.stack);
console.log(stacksExplorers);

console.log("----------------Explorers que usan JS----------------");
const explorersJs = explorers.filter((item) => item.stack[0] === "js");
console.log(explorersJs);

console.log("----------------Explorer que vive en CDMX----------------");
const explorerCDMX = explorers.find((item) => item.city === "CDMX");
console.log(explorerCDMX);

console.log("----------------Suma de ejercicios completos----------------");
const sumaEjercicios = explorers.reduce(
  (acc, ejercicios) => acc + ejercicios.exercises_completed,
  0
);
console.log(sumaEjercicios);

console.log("---------Validacion ejercicios finalizados Front-End---------");
const ejerciciosFront = explorers.some(
  (item) => item.missions.frontend.exercisesFinished === true
);
console.log(ejerciciosFront);

console.log("---------Validacion del OnBoarding terminado---------");
const onBoardingTerminado = explorers.every(
  (item) => item.missions.onboarding.isFinished === true
);
console.log(onBoardingTerminado);
