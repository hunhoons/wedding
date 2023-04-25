import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => { // 새로고침 시 맨위로 로드
	const {pathname} = useLocation();
	useEffect( () =>{
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;

}

export default ScrollToTop;