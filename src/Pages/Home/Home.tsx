import { decrement, increment } from "../../Redux/Features/Counter/counterSlice";
import { RootState } from "../../Redux/store";
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
	const { count } = useSelector((state: RootState) => state.counter)
	const dispatch = useDispatch()

	return (
		<div className="flex gap-5 h-screen items-center justify-center">
			<button className="bg-purple-500 text-white py-1 px-3 text-lg rounded" onClick={() => dispatch(increment())}>Increment</button>
			<h1>{ count }</h1>
			<button className="bg-red-500 text-white py-1 px-3 text-lg rounded" onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};

export default Home;