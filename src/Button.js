import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.button}>{text}</button>;
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
};

export default Button;

/*
    Module System
    파일 밖으로 내보낼 때는 export 사용
    파일을 불러올 때는 import 사용

    export { Func }
    import { Func } from <./파일경로>

    export default는 내보낼 요소가 하나인 경우 사용
    이때, export { Func }와 export default { Func }의 차이는
    객체의 이름을 유지한 채 내보내거나, 임의로 설정하는 것을 말한다.
    export { Func } => 객체 이름 유지
    export default { Func } => 객체의 이름 임의 설정 가능

    CRA 환경에서 propTypes 확인을 위해 터미널에 아래와 같이 명령어 작성
    npm i prop-types
    그 뒤 사용하고자 하는 컴포넌트에 import
    import PropTypes from "prop-types";
    global css 적용을 방지하기 위해서 css module 사용
*/