import { FormLabel, ListItem, UnorderedList } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const ListWrapper = styled.div`
  max-height: 16em;
  overflow-y: auto;
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
  border-radius: ${(props) => props.theme.radii.md};
  padding: 0.5rem 1rem;
`;

type Props = {
  label: string;
  listItems: string[];
};

export const List = ({ label, listItems }: Props) => (
  <Wrapper>
    <FormLabel>{label}</FormLabel>
    <ListWrapper>
      <UnorderedList>
        {listItems.map((listItem, index) => (
          <ListItem key={index}>{listItem}</ListItem>
        ))}
      </UnorderedList>
    </ListWrapper>
  </Wrapper>
);
