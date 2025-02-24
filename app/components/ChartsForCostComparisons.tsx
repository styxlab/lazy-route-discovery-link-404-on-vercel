import { BarList, Card, ScatterChart } from '@tremor/react'

const dataConsumption = [
  {
    name: 'engiwo.de',
    value: 40,
    color: 'teal',
  },
  {
    name: 'energyausweis.de',
    value: 49,
    color: 'teal',
  },
  {
    name: 'online-energieausweis.eu',
    value: 49,
    color: 'teal',
  },
  {
    name: 'energieausweis.de',
    value: 60,
    color: 'yellow',
  },
  {
    name: 'energieausweis48.de',
    value: 82,
    color: 'yellow',
  },
  {
    name: 'online-energieausweis.org',
    value: 45,
    color: 'teal',
  },
  {
    name: 'mcenergieausweis.de',
    value: 59,
    color: 'yellow',
  },
  {
    name: 'energieausweis-vorschau.de',
    value: 69,
    color: 'yellow',
  },
  {
    name: 'ista.com',
    value: 108,
    color: 'rose',
  },
  {
    name: 'entega.de',
    value: 100,
    color: 'rose',
  },
]

export const VerbrauchsausweisPreise = () => {
  return (
    <Card className="mx-auto max-w-lg">
      {' '}
      <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Energieverbrauchsausweis für Wohngebäude 2024</h3>{' '}
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-4 flex items-center justify-between">
        {' '}
        <span>Anbieter</span> <span>Preis in €</span>{' '}
      </p>{' '}
      <BarList data={dataConsumption} className="mt-2" sortOrder="ascending" />{' '}
    </Card>
  )
}

const dataDemand = [
  {
    name: 'engiwo.de',
    value: 60,
    color: 'teal',
  },
  {
    name: 'energyausweis.de',
    value: 99,
    color: 'teal',
  },
  {
    name: 'online-energieausweis.eu',
    value: 99,
    color: 'teal',
  },
  {
    name: 'energieausweis.de',
    value: 110,
    color: 'yellow',
  },
  {
    name: 'energieausweis48.de',
    value: 90,
    color: 'teal',
  },
  {
    name: 'online-energieausweis.org',
    value: 135,
    color: 'yellow',
  },
  {
    name: 'mcenergieausweis.de',
    value: 109,
    color: 'yellow',
  },
  {
    name: 'energieausweis-vorschau.de',
    value: 199,
    color: 'rose',
  },
  {
    name: 'ista.com',
    value: 487,
    color: 'rose',
  },
  {
    name: 'entega.de',
    value: 600,
    color: 'rose',
  },
]

export const BedarfsausweisPreise = () => {
  return (
    <Card className="mx-auto max-w-lg">
      {' '}
      <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Energiebedarfsausweis für Wohngebäude 2024</h3>{' '}
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-4 flex items-center justify-between">
        {' '}
        <span>Anbieter</span> <span>Preis in €</span>{' '}
      </p>{' '}
      <BarList data={dataDemand} className="mt-2" sortOrder="ascending" />{' '}
    </Card>
  )
}

const chartdata = [
  {
    company: 'engiwo.de',
    Durchschnittspreis: 50,
    Verbrauchsausweis: 40,
    Bedarfsausweis: 60,
    'Differenz Bedarfs-/Verbrauchsausweis': 20,
    Ranking: 1,
  },
  {
    company: 'energyausweis.de',
    Durchschnittspreis: 74,
    Verbrauchsausweis: 49,
    Bedarfsausweis: 99,
    'Differenz Bedarfs-/Verbrauchsausweis': 50,
    Ranking: 2,
  },
  {
    company: 'online-energieausweis.eu',
    Durchschnittspreis: 74,
    Verbrauchsausweis: 49,
    Bedarfsausweis: 99,
    'Differenz Bedarfs-/Verbrauchsausweis': 50,
    Ranking: 3,
  },
  {
    company: 'energieausweis.de',
    Durchschnittspreis: 85,
    Verbrauchsausweis: 60,
    Bedarfsausweis: 110,
    'Differenz Bedarfs-/Verbrauchsausweis': 50,
    Ranking: 4,
  },
  {
    company: 'energieausweis48.de',
    Durchschnittspreis: 86,
    Verbrauchsausweis: 82,
    Bedarfsausweis: 90,
    'Differenz Bedarfs-/Verbrauchsausweis': 8,
    Ranking: 5,
  },
  {
    company: 'online-energieausweis.org',
    Durchschnittspreis: 90,
    Verbrauchsausweis: 45,
    Bedarfsausweis: 135,
    'Differenz Bedarfs-/Verbrauchsausweis': 90,
    Ranking: 6,
  },
  {
    company: 'mcenergieausweis.de',
    Durchschnittspreis: 94,
    Verbrauchsausweis: 59,
    Bedarfsausweis: 109,
    'Differenz Bedarfs-/Verbrauchsausweis': 50,
    Ranking: 7,
  },
  {
    company: 'energieausweis-vorschau.de',
    Durchschnittspreis: 134,
    Verbrauchsausweis: 69,
    Bedarfsausweis: 199,
    'Differenz Bedarfs-/Verbrauchsausweis': 130,
    Ranking: 8,
  },
  {
    company: 'ista.com',
    Durchschnittspreis: 308,
    Verbrauchsausweis: 108,
    Bedarfsausweis: 487,
    'Differenz Bedarfs-/Verbrauchsausweis': 380,
    Ranking: 9,
  },
  {
    company: 'entega.de',
    Durchschnittspreis: 360,
    Verbrauchsausweis: 100,
    Bedarfsausweis: 600,
    'Differenz Bedarfs-/Verbrauchsausweis': 500,
    Ranking: 10,
  },
]

export const AnbieterDurchschnittspreise = () => {
  return (
    <Card>
      <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-lg font-semibold">Durchschnittliche Kosten für einen Energieausweis</p>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content leading-6">Für Wohngebäude in Deutschland. Stand 2024.</p>
      <ScatterChart
        className="mt-6 -ml-2 h-96"
        yAxisWidth={50}
        data={chartdata}
        category="company"
        x="Ranking"
        y="Durchschnittspreis"
        size="Differenz Bedarfs-/Verbrauchsausweis"
        showOpacity={true}
        minYValue={0}
        maxYValue={400}
        maxXValue={11}
        valueFormatter={{
          x: (x) => `${x}. Preisrang`,
          y: (y) => `${y} €`,
          size: (s) => `${s} €`,
        }}
        enableLegendSlider
      />
    </Card>
  )
}
