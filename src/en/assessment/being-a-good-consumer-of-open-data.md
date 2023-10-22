---
title: '5. Being a Good Consumer of Open Data'
module_id: 5
in_toc: true
excerpt: 'Institutions may be more responsive to open election data requests if they trust the information will be used responsibly and analyzed credibly. To be a good open data consumer, observation groups should take the utmost care to ensure the data is collected, analyzed and presented credibly.'
---

Institutions may be more responsive to open election data requests if they trust the information will be used responsibly and analyzed credibly. To be a good open data consumer, observation groups should take the utmost care to ensure the data is collected, analyzed and presented credibly. Monitoring groups will likely need to take preliminary steps at cleaning and organizing datasets and verifying their credibility and usability, as data provided to groups often comes in an unprocessed form. In addition, organizations should consider discarding any data that is irrelevant to their electoral observation. Source data is often not cleaned, organized or structured in the way groups would need it to be to begin data analysis, meaning groups will need to prepare their data before analyzing it.

Data preparation is the process of cleaning, structuring and enriching data into a desired output for analysis. It will often be a time-consuming task, but it is an essential step to ensuring data is ready before analysis and avoid common pitfalls during the data analysis process.

Generally data preparation includes:

- Downloading and/or converting data into machine readable format, if necessary;
- Importing data into data analysis program (e.g., Excel, Google Sheets, or open-source programming languages like R or Python);
- Cleaning data to check for duplicates, missing data, and bad character encodings;
- Structuring data into the right format (numerical, text, etc) and wrangling data to ensure consistent structure across dataset; and
- Checking data for accuracy such as outliers, wrong categorical data, and other inconsistencies.

In addition to the topics covered in this step, groups should consider reviewing the five major steps in the data analysis process in [Module 3](/en/academy/application-summarizing-the-polling-station-data/) of the Election Data Academy.

## Double Check Source

Prior to downloading or restructuring datasets, groups should make absolutely sure they are:

1. Using the most up-to-date data,
2. Using the official dataset,
3. Understand how the data was collected.

Simple browser searches may pull up unofficial data on certain topics – for instance, surveys conducted by third party sources – or may link users to an old or outdated government source. While these sources may be used to complement and/or confirm the quality of the data groups are provided, unofficial datasets cannot be the principal source of analysis.

## Retrieving data

In an ideal world, all election data would be available, for free, on the internet in a machine readable, non-proprietary format according to [Open Election Data principles](/en/guide/principles/) that would make it easy to download, import, and analyze data. However, many governments are not at this level of data transparency yet.

Hopefully groups have advocated for data with public institutions that understand and have committed to open data principles, but if not, groups may still be able to gain access to the data that they want. When an EMB or other institution provides data in a non-machine readable format such as a PDF, groups can use software or techniques which convert the PDF file into a CSV or other machine readable format. Sometimes a single dataset may be divided into separate files by geographic or administrative divisions, so a group might need to combine into a single dataset to conduct analysis. Other common problems can be overcomed with a little flexibility and creativity.

## Parsing, Restructuring, and Cleaning Data

Even when data is available in the format and detail observer groups would like, staff may still have to sort, organize, and “clean” data in order to optimize it for analysis. Cleaning data (sometimes called “scrubbing”) means making any small formatting changes needed to run analysis. For example, before merging two datasets together by the name of geography, you may need to reconcile slight variations in the spelling and/or need to eliminate trailing spaces. Cleaning data may mean isolating or removing data, records, or fields that are corrupt, inaccurate, or superfluous. This is usually only referred to in the context of large datasets with multiple records. Depending on the state of the data and the goal of a group’s analysis, data cleaning and organization could take substantial time.

## Quality Check Data Before Analyzing

Just because open data comes from government sources does not necessarily mean it will be perfect. As good consumers of open data, citizen monitoring groups should check to see if there are any errors or discrepancies in the data that could indicate a larger flaw in the dataset. By doing these checks prior to analyzing the data, groups can avoid wasting time working from bad data, and won’t be at risk of presenting analysis based on flawed information. In particular, groups should conduct preliminary:

- **Accuracy Checks** – Look for any obvious signs of data inaccuracy. Does disaggregated data add up to the aggregated total? If not, why not? Does information at the local, state, and national reconcile? Consider outliers or data that might not make logical sense. For example, if groups are looking at election results data, does the number of invalid ballots exceed the number of votes cast?

- **Consistency Checks** – Look at the consistency of data across sources. For instance, if the EMB has certain data on their website, does that reflect the data they’ve provided you in a different format? If there are multiple versions of a dataset, do they all say the same thing? For example, does the polling station list listed on an EMB website have the same number of polling stations as the list available for download?

- **Completeness Checks** – Look for any gaps in the data. Are all localities represented? Political parties? Dates or time ranges? Is there any duplicate data? For example, if groups are looking at a voter list, they would want to ensure that the data from all constituencies are included.

If monitoring organizations discover credibility, consistency, or completeness issues with open data, they should go back to the source provider to clarify where the issues are. It’s important for groups to verify that they are working with the most accurate and complete data set. If data problems cannot be clarified or remedied, groups will have to be honest about the limitations in their analysis and presentation of findings. In cases where data is clearly low quality or inaccurate throughout, then that data should be considered unviable and not be used at all.

## Draw Responsible Conclusions and Present Findings Clearly

Groups should understand the limitations of the open data they are working with and treat their analysis and findings appropriately. In particular, groups should be mindful to not misrepresent the data in any way, and make sure that findings are presented clearly so that they cannot be misinterpreted. When drawing conclusions from open data, always keep in mind the electoral integrity context. How severely do your findings impact the integrity of the process? What do they indicate is at risk? For instance, discovering that a list of polling stations is riddled with incorrect addresses is likely more severe than discovering that a list of polling stations has many polling station names misspelled because the former could actually disenfranchise voters who go to the wrong place on election day.

## Keep in Mind Relevance

As groups work with open data, it may become apparent that some of the data does not offer anything new or informative to their analysis. Much like with all other parts of the observation, analysis, and statement drafting process, groups should be discerning regarding what information and findings they incorporate into public presentations. Organizations should not waste time on information that is likely irrelevant to their observation priorities or may confuse their findings.
