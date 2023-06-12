import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-center">
        <p>&copy; Danylo Bliznichenko - {new Date().getFullYear()}</p>
        {/* Attribuion to API that I used */}
        <div id="edamam-badge" />
      </div>
    </FooterWrapper>
  );
};
export default Footer;

const FooterWrapper = styled.footer`
  background-color: var(--clr-black);
  color: var(--clr-white);

  .footer-center {
    max-width: var(--max-width);
    margin-inline: auto;
    padding: var(--side-padding);

    text-align: center;
  }
`;
