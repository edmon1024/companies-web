import React from "react";
import NextLink from 'next/link'
import { Text, Link } from "@chakra-ui/react";


const MenuItem = (props) => {
  return (
    <NextLink href={props.href} passHref>
      <Link mr={{ base:8 }}>
        <Text display="block" my={1}>
          <span>{props.children}</span>
        </Text>
      </Link>
    </NextLink>
  );
}

export default MenuItem
