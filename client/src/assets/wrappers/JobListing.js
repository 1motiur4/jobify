import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  background: var(--white);
  margin-left: 30px;
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  height: 90vh;
  top: 120px;
  position: sticky;

  .job-listing-container {
    transition: var(--transition);
  }
`;

export default Wrapper;
