

import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Create a function to generate the PDF
const ConstructionCompanyReport = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}> Petwill Construction Company Report</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Executive Summary</Text>
        <Text style={styles.text}>The meeting was held on February 14, 2024, and was attended by the company's CEO, CFO, and COO. The purpose of the meeting was to discuss the company's pricing strategy, members' attendance rates, and losses. The CFO reported that the company's current pricing strategy is not competitive, and the COO reported that members' attendance rates have been declining. The CEO asked for suggestions on how to improve pricing and attendance rates, and the COO suggested implementing a new incentive program. The CEO also asked about recent losses. The COO also reported that the company's members' attendance rates have been declining, which is affecting revenue. The CEO asked for suggestions on how to improve both pricing and attendance. The COO suggested implementing a new incentive program, and the CFO recommended increasing marketing efforts to attract new members.
After discussing these issues, the CEO opened the floor for questions and comments. The COO brought up the issue of safety, noting that there have been an increasing number of accidents on construction sites. The CEO agreed that safety is a top priority.And asked the COO to develop a plan to address the safety issue. The meeting ended with a vote of confidence in the CEO and the direction of the company. All attendees were asked to submit any further suggestions or concerns in writing .
          
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Project Overview</Text>
        <Text style={styles.text}>Project 1: Project description;"Petwill  Construction Company is proposing to build a new office building in downtown California. The project will include a new six-story office building with ground-floor retail space, a parking garage, and a public plaza. The building will be designed to be LEED-certified, with sustainable features such as rainwater harvesting, natural lighting, and energy-efficient systems. The project will also include extensive landscaping and public art. The estimated cost of the project is $20 million, and the anticipated completion date is December 2030</Text>
        <Text style={styles.text}>Project 2: Project description ;</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Financial Performance</Text>
        <Text style={styles.text}>Revenue: $1,000,000</Text>
        <Text style={styles.text}>Profit: $100,000</Text>
        <Text style={styles.text}>Loss: $10,000</Text>
      </View>
    </Page>
  </Document>
);

const DownloadPDF = () => (
  <div className="text-center">
    <PDFDownloadLink document={<ConstructionCompanyReport />} fileName="construction_report.pdf">
      {({ blob, url, loading, error }) => (
        <button className={`text-lg font-semibold mb-8 py-2 px-4 bg-blue-500 text-white rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        >
          {loading ? 'Generating PDF...' : 'Download Reports'}
        </button>
      )}
    </PDFDownloadLink>
  </div>
);

export default DownloadPDF;
