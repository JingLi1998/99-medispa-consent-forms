import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 200px;
`;

export const Logo = () => {
  return (
    <Wrapper>
      <Image src={"/images/logo_small.png"} alt="99 Medispa Logo" />
    </Wrapper>
  );
};
