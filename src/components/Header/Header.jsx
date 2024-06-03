import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';

const Header = () => {
  return (
    <StHeader>
      <StContents>
        <StLink href="/">
          ✍🏻{' '}
          <StHeading>
            <StStrong>Blood</StStrong>folio
          </StHeading>
        </StLink>
        <Button variant="secondary" href="/profile" rounded>
          내 프로필
        </Button>
      </StContents>
    </StHeader>
  );
};

const StHeader = styled.header`
  height: 118px;
  background-color: var(--color-base-background);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StContents = styled.div`
  max-width: var(--width-max);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StStrong = styled.strong`
  font-weight: 600;
`;

const StLink = styled(Link)`
  color: var(--color-white);
  height: 100%;
  display: flex;
  align-items: center;
  white-space: break-spaces;
`;

const StHeading = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

export default Header;