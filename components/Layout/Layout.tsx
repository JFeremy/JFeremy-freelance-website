import Footer from "../Footer";
import StyledLayout from "./Styled";

type Props = {
    readonly children?: React.ReactNode
}

export default function Layout(props: Props) {
    return (
      <StyledLayout>
        <main>{props.children}</main>
        <Footer />
      </StyledLayout>
    )
  }