import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { Pricing } from '../components/Pricing';
import { usePageQuery } from '../generated/graphql';

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'home',
    },
  });

  return (
   <>
    <Hero title={data?.page.title} subtitle={data?.page.subtitle}/>
    <Features />
    <Pricing />
  </>
);
}
