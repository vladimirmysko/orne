import { Flex, Grid, Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex width="100vw" height="100svh" direction="column" px="4" py="9">
      <Grid maxWidth="440px" width="100%" m="auto">
        <Heading>Welcome to Orne</Heading>
      </Grid>
    </Flex>
  );
}
