import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './components/CardComponent'
import Cards from './components/Cards'
import './App.css';

const tarjetas = [
    {id: 1,
        url: "https://pbs.twimg.com/profile_images/602716059922141184/TztT5x2S_400x400.jpg",
        name: "Reptiles",
        text: "Reptiles are tetrapod animals in the class Reptilia, comprising today's turtles, crocodilians, snakes, amphisbaenians, lizards, tuatara, and their extinct relatives. The study of these traditional reptile orders, historically combined with that of modern amphibians, is called herpetology.",
        wiki: "https://es.wikipedia.org/wiki/Reptilia"
    },
    {id: 2,
        url: "https://www.biodiversidadvirtual.org/insectarium/data/media/16034/Steatoda-albomaculata-1-3-515129.2.jpg",
        name: "Arachnids",
        text: "Arachnids (/əˈræknɪdz/) are a class (Arachnida) of joint-legged invertebrate animals (arthropods), in the subphylum Chelicerata. Almost all adult arachnids have eight legs, although the front pair of legs in some species has converted to a sensory function, while in other species, different appendages can grow large enough to take on the appearance of extra pairs of legs",
        wiki: "https://es.wikipedia.org/wiki/Arachnida"
    },
    {id: 3,
        url: "https://pbs.twimg.com/profile_images/1828326189/rana3_400x400.jpg",
        name: "Amphibians",
        text: "Amphibians are ectothermic, tetrapod vertebrates of the class Amphibia. Modern amphibians are all Lissamphibia. They inhabit a wide variety of habitats, with most species living within terrestrial, fossorial, arboreal or freshwater aquatic ecosystems.",
        wiki: "https://en.wikipedia.org/wiki/Amphibian"
    },
    {id: 4,
        url: "https://pbs.twimg.com/profile_images/1828326189/rana3_400x400.jpg",
        name: "Amphibians",
        text: "Amphibians are ectothermic, tetrapod vertebrates of the class Amphibia. Modern amphibians are all Lissamphibia. They inhabit a wide variety of habitats, with most species living within terrestrial, fossorial, arboreal or freshwater aquatic ecosystems.",
        wiki: "https://en.wikipedia.org/wiki/Amphibian"
    },
    {id: 5,
        url: "https://pbs.twimg.com/profile_images/1828326189/rana3_400x400.jpg",
        name: "Amphibians",
        text: "Amphibians are ectothermic, tetrapod vertebrates of the class Amphibia. Modern amphibians are all Lissamphibia. They inhabit a wide variety of habitats, with most species living within terrestrial, fossorial, arboreal or freshwater aquatic ecosystems.",
        wiki: "https://en.wikipedia.org/wiki/Amphibian"
    }
];

class App extends Component {
  render() {

    return (
      <div className="App">

          <Cards
            cards = {tarjetas}/>

      </div>
    );
  }
}

export default App;
