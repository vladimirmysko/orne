import { Flex } from "@radix-ui/themes";

import { SignUpForm } from "./_components/sign-up-form";

export default function SignUpPage() {
  return (
    <Flex width="100vw" height="100svh" direction="column" px="4" py="9">
      <SignUpForm maxWidth="440px" width="100%" m="auto" />
    </Flex>
  );
}
