"use client";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  Button,
  Callout,
  Grid,
  Heading,
  Link,
  Text,
  TextField,
  type GridProps,
} from "@radix-ui/themes";

import { ContinueWithGoogleButton } from "@/components/continue-with-google-button";
import { Link as NextLink } from "@/i18n/navigation";

export function SignUpForm(props: GridProps) {
  return (
    <Grid gap="7" asChild {...props}>
      <form>
        <Grid>
          <Heading>Welcome to Orne</Heading>
          <Heading as="h2" color="gray">
            Knowledge, shaped
          </Heading>
        </Grid>

        <ContinueWithGoogleButton />

        <Callout.Root size="1" role="alert" color="red">
          <Callout.Icon>
            <ExclamationTriangleIcon />
          </Callout.Icon>
          <Callout.Text>Error text</Callout.Text>
        </Callout.Root>

        <Grid gap="6">
          <Grid gap="4">
            <Grid gap="2">
              <Text as="label" htmlFor="username" size="2">
                Username
              </Text>
              <TextField.Root
                id="username"
                name="username"
                type="text"
                placeholder="Your username"
                required
                autoFocus
                size="3"
              />
            </Grid>
            <Grid gap="2">
              <Text as="label" htmlFor="email" size="2">
                Email
              </Text>
              <TextField.Root
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
                size="3"
              />
            </Grid>
            <Grid gap="2">
              <Text as="label" htmlFor="password" size="2">
                Password
              </Text>
              <TextField.Root
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                required
                size="3"
              />
            </Grid>
          </Grid>
          <Button type="submit" size="3" highContrast>
            Continue
          </Button>
        </Grid>

        <Text size="2">
          Already have an account?{" "}
          <Link highContrast asChild>
            <NextLink href="/sign-in">Sign in</NextLink>
          </Link>
        </Text>
      </form>
    </Grid>
  );
}
