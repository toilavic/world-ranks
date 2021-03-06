import Layout from '../components/Layout/Layout'
import SearchInput from '../components/SearchInput/SearchInput'
import CountriesTable from '../components/CountriesTable/CountriesTable'

import styles from '../styles/Home.module.css'

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.count}> Found {countries.length} countries</div>
      
      <SearchInput placeholder = "Filter by Name, Region or SubRegion" />

      <CountriesTable countries={countries} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries
    }
  }
}
