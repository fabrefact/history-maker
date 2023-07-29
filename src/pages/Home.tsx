import { useState } from 'preact/hooks';
import preactLogo from '../assets/preact.svg';
import viteLogo from '/vite.svg';
import AddMediaForm from "./media/add_media";

export function Home() {
	const [count, setCount] = useState(0);

	return (
		<>
			<AddMediaForm/>
		</>
	);
}
