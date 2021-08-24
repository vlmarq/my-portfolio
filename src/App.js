import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<div
			className="App min-h-screen 
		"
		>
			<section className="flex h-screen w-screen justify-center items-center">
				<div className="shadow-2xl w-2/3 h-1/3 lg:w-1/3 flex flex-col items-center justify-center rounded bg-gradient-to-br from-white to-gray-300 text-gray-900">
					<h1 className="text-2xl md:text-4xl">Vanessa Lamarque</h1>
					<h2 className="text-lg md:text-2xl mb-2">Full Stack Developer</h2>
					<div className="space-x-2">
						<a
							href="https://www.linkedin.com/in/lamarquev/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
						</a>
						<a
							href="https://github.com/vlmarq"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon className="fa-2x" icon={faGithub} />
						</a>
						<a
							href="https://docs.google.com/document/d/1imPz8SDAOpOSPo5CqUtgOdWc3LTb03uX8K4-8Fga7Pw/edit?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon className="fa-2x" icon={faFile} />
						</a>
						<a
							href="mailto:lamarque.van@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon className="fa-2x" icon={faPaperPlane} />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
