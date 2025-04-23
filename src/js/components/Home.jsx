import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const cardsData = [
		{
			img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sir_Joseph_Noel_Paton_-_The_Quarrel_of_Oberon_and_Titania_-_Google_Art_Project_2.jpg/500px-Sir_Joseph_Noel_Paton_-_The_Quarrel_of_Oberon_and_Titania_-_Google_Art_Project_2.jpg",
			imgAlt: "Example image",
			title: "Twilight Procession",
			content: "Oberon and Titania walk through spring woods, their court trailing, petals falling with glowing joy.",
			buttonLink: "https://www.youtube.com/watch?v=fy2tjWVcTEY",
		},
		{
			img: "https://i.pinimg.com/564x/ce/e1/86/cee18615d6ca8b501774f3bfd6132764.jpg",
			imgAlt: "A painted flower, pink, held by a pale, delicate hand against a soft yellow background.",
			title: "A Gift for the Fairy Queen",
			content: "A spring bloom, cradled in gentle fingers, hums with magic meant for Titania’s wandering heart.",
			buttonLink: "https://www.youtube.com/watch?v=Ol6EtEJwAlc",
		},
		{
			img: "https://64.media.tumblr.com/c1cfbf4909b9a5f55367d9bc1b34d527/fc6b1ad9368c6558-98/s500x750/7e121385050c6da1a382670ea6b49991bd7564d6.jpg",
			imgAlt: "Titania sleeps on a flowered bed under the moon, surrounded by fairy lights and whispering trees.",
			title: "Where Titania Sleeps",
			content: "Upon a bed of violets and thyme, Titania dreams beneath the sighing boughs of night.",
			buttonLink: "https://www.youtube.com/watch?v=C8xrpvOhYRE",
		},
		{
			img: "https://lh4.googleusercontent.com/proxy/lRYuvYjECvuXzH2zPBZGjvLFyKqu1MeTJGavYRtCzhIFMSceNW83n3MSUGZTIVmYRTfjlY9IyEDMMamxn4SnP_wcEZJ3yO1p-5x2qpFjj5jPTA",
			imgAlt: "Titania and Oberon lead a glowing fairy parade. They dance beneath moonlight; petals and lights fill the air.",
			title: "Revel of the Fey",
			content: "Titania and Oberon lead a spring parade, music rises, wings shimmer, joy bursts like blossoms.",
			buttonLink: "https://www.youtube.com/watch?v=9j433UYnafg",
		},
	];

	return (
		<>
			<Navbar />
			<div className="container d-flex flex-column align-items-center">
				<Header />
				<div className="row justify-content-center g-4 mx-5">
					{cardsData.map((card, index) => (
						<div key={index} className="col-lg-3 col-md-6 col-sm-12">
							<Card
								img={card.img}
								imgAlt={card.imgAlt}
								title={card.title}
								content={card.content}
								buttonLink={card.buttonLink}
							/>



						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;