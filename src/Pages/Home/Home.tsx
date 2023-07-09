import { decrement, increment, incrementByAmount } from "../../Redux/Features/Counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

const Home = () => {
	const { count } = useAppSelector((state) => state.counter)
	const dispatch = useAppDispatch()

	return (
		<div className="flex gap-5 h-screen items-center justify-center">
			<button className="bg-purple-500 text-white py-1 px-3 text-lg rounded" onClick={() => dispatch(increment())}>Increment</button>
			<h1>{ count }</h1>
			<button className="bg-red-500 text-white py-1 px-3 text-lg rounded" onClick={() => dispatch(decrement())}>Decrement</button>
			<button className="bg-red-500 text-white py-1 px-3 text-lg rounded" onClick={() => dispatch(incrementByAmount(5))}>Increment By Amount</button>
		</div>
	);
};

export default Home;