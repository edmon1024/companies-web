import React from "react";
import NextLink from 'next/link'
import { Box, Text, Link } from "@chakra-ui/react"

const Title = () => {
  return (
    <Box>
      <NextLink href="/" passHref>
        <Link>
          <Text fontSize="lg" fontWeight="bold">
            Companies
          </Text>
        </Link>
      </NextLink>
    </Box>
  );
}

export default Title
