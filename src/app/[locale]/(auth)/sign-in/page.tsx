import { Flex } from "@radix-ui/themes";

import { SignInForm } from "./_components/sign-in-form";

export default function SignInPage() {
  return (
    <Flex width="100vw" height="100svh" direction="column" px="4" py="9">
      <SignInForm maxWidth="440px" width="100%" m="auto" />
    </Flex>
  );
}
