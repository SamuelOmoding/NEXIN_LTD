import { ResponsiveBar } from "@nivo/bar"
import { SalesBar as data } from "../Data/MockData"
import { Box } from "@mui/material"
function Bar({ThemeStyles}) {
  return (
    <>
    <Box class="h-3/4 w-full p-7">
    <h1 className='text-slate-300  font-bold text-2xl'>Bar Chart</h1>
    <h3 className="text-emerald-500">To show the rate of supply in Different Counties</h3>
    <ResponsiveBar
        data={data}
        keys={[
            'Design',
            'Pricing',
            'BOQ',
            "Delivery",
            "Personell",
            "Management",
            "Scheduling",
            "Structure",
            "Reports",
            "Site Visits",
            "Handing Over",
            "Quality",
            "Safety",
            "Enquiries"
        ]}
        indexBy="County"
        margin={{ top: 20, right: 130, bottom: 60, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        theme={{
            tooltip: {
                container: {
                    background: '#00b5d8', // This is the Tailwind bg-cyan-400 color
                },
            },
        }}
        // ... rest of your props
    />
    </Box>
    </>
  )
}

export default Bar