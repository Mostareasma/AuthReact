import {Container} from "react-bootstrap";

export default function CenterContent({children}) { {
        return (
            <Container className=" row h-100 d-flex align-items-center m-auto justify-content-center"  fluid="lg" >
                {children}
            </Container>
            );
    }
}
