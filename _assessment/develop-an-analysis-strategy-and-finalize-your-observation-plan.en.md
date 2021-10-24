---
title: '3. Develop an Analysis Strategy and Finalize Your Observation Plan'
lang: en
module_id: 3
in_toc: true
permalink: '/assessment/develop-an-analysis-strategy-and-finalize-your-observation-plan/'
excerpt: 'The analysis of open data should not supplant or replace other observation activities. Rather, open data analysis can help enhance monitoring strategies and provide greater context and support to monitoring conclusions. Just because an organization has decided to use open data to analyze a part of the electoral process does not mean that it should not also want to deploy observers to collect real time information on the process.'
---

The analysis of open data should not supplant or replace other observation activities. Rather, open data analysis can help enhance monitoring strategies and provide greater context and support to monitoring conclusions. Just because an organization has decided to use open data to analyze a part of the electoral process does not mean that it should not also want to deploy observers to collect real time information on the process.

> **Practicing Data Analysis**
>
> The [Open Election Data Academy](/en/academy/) includes practical modules for readers to learn how to analyze common datasets released during elections. The modules guide readers through how to make the data work for you.

## Open Election Data Monitoring and Analysis Plan

A data analysis plan is a detailed document outlining procedures for conducting an analysis on open election data and what various steps in the analysis are going to be. An analysis plan should be created prior to beginning data analysis in order to guide how a group is going to collect and analyze the data. This document is a living document which may be revised during the data analysis. The following table outlines key components and example inputs of a data analysis plan. Groups will need to consider availability of data, capacities of staff, resources needed, etc. The remainder of Step 3 provides more details and exercises to help groups think about and complete a data analysis plan.

**[View and fill out your own Sample Data Monitoring and Analysis Plan. ![](/assets/images/assessment/exercise_icon.svg)](/assets/assessment/Table_2.pdf)**

## Matching Open Data with Analysis Capacity

A key consideration of a group’s data analysis plan should be internal capacity to conduct data analysis. Depending on what groups plan on analyzing and the size of the dataset, specialized knowledge may be required. A Data Science consultant may need to be hired to help with either merging multiple datasets or summarizing the data at a higher level (making the dataset smaller) so more can be done by in-house staff. Or the consultant may need to conduct all of the analysis for large datasets.

> **Q: What is a _large_ dataset?** > **A: More than 1 million records**
>
> Many organizations use Microsoft Excel or Google Sheets for data analysis. However, these programs have some limitations. At the time of publication, an Excel file cannot have more than 1,048,576 rows/records. And the total number of characters in a cell is capped at 32,767. Both [Microsoft](https://bit.ly/excel-limits) and [Google](https://bit.ly/sheets-limits) have documented these limits.
>
> For large datasets like voter lists, free and open-source programming languages such as R or Python can be used. However, they do require more specialized knowledge of programming and the relevant data analysis modules/packages.

Analysis of open data will often require basic arithmetic to identify trends and draw conclusions, including identifying percentages of increase and decrease, averages, standard deviations, changes over time, and proportional comparisons. In some cases more advanced analysis techniques may be required for more sophisticated analysis (such as calculating correlations between variables or running machine learning models). A group’s access to data management and analysis resources and comfort with statistics and programming could impact how deeply they can analyze certain datasets on their own.

Groups should reflect what capacity they have to:

- Retrieve datasets
- Collect, 'scrape’, or convert datasets if necessary
- Clean and parse data
- Summarize datasets, especially if they are large (i.e., more than 1 million records)
- Repeat steps above if necessary
- Analyze complex datasets or merge simple datasets into a complex dataset
- Work with spatial data and/or mapping software or packages (e.g., Q-GIS or relevant programming libraries like Folium, GeoPy, and/or Leaflet)
- Conduct advanced analysis (e.g., correlations or machine-learning models)
- Visualize data
- Storytelling with data

Groups limited in some capacity can consider if they have the budget to work with a third party vendor or consultant to acquire specialized software or technical assistance. Organizations can test out their analysis skills by participating in modules at the [Election Data Academy](/en/academy/) online and should answer the questions in **[Exercise B: Organizational Capacity to Use Open Election Data. ![](/assets/images/assessment/exercise_icon.svg)](/assets/assessment/exercises/Exercise_B.pdf)**

## When Data is Easily Retrieved

As noted, the **retrievability** of data will impact the type and level of data expertise groups may need. The ease or difficulty in retrieving data needs **to be examined** as a key part of the data analysis plan. Ideally, most, if not all, the election data will be available, for free, on the internet. In this case, groups should be expected to download and import data into a [CSV, XML, or JSON file](en/guide/principles/analyzable/) (this is usually the case for large datasets and quantitative information), or download and conduct some manually data input or qualitative analysis (this could be the case for forms, rules and regulations, security reports, notifications, and data that does not lend itself to consolidation). However, in some instances data may not be available online or according to [key open election data principles](/en/guide/principles/). In situations where data is not easily retrieved, groups should consider other strategies, such as “scraping” data to collect and convert the needed information as well as conducting advocacy, the latter of which is detailed in Step 4.

> **Technical issues to keep in mind when requesting data**
>
> When requesting a dataset, it will be important to understand what parameters were used for each of the following so that the data can be properly read into your analysis software:
>
> 1. **Field Separators** (delimiters): A tab-delimited file or comma-separated value (CSV) file are text format files. In order to tell the program where each field begins and ends in an imported or exported file, the fields must be separated (i.e., delimited) with a character such as a comma(,). This character is called the field separate or delimiter. Tab is another common delimiter.
> 2. **Text-Qualifier:** If a field contains the delimiter character within its text (e.g, an address or name in a voter list dataset), the program will interpret the comma as the end of a field rather than just part of the text. In oder to prevent this mistake, fields must have a qualifier. The qualifier is put around each field to note that _all_ the text inside is the same field event if it it contains a commona. The most common qualifier is double quotes ("). Most programs will include a qualifier when saving in a CSV format.
> 3. **Character Encoding:** When files are saved, a specific character encoding is used. UTF-8 (unicode) is the most common. However, due to different language and scripts, a different kind of encoding might be used.

## Data Preparation

Another consideration when completing a data analysis plan is to think through how much data preparation will be needed ahead of beginning data analysis. **Data preparation** is the process of cleaning, structuring, and enriching raw data into a desired output for analysis. Data preparation takes the highest amount of time and resources. However, your analysis will only yield meaningful results if your data has high quality. It’s important to ensure that your datasets achieve data integrity, in terms of their completeness, accuracy, and consistency. See Step 5 for more details on best practices in data preparation.

> **"Scraping" Data**
>
> Data scraping is a method of collecting and converting data from sources that are not in a machine analyzable format but otherwise exists, such as in a PDF or in a table dislayed on a webpage. The process of data scraping and validating can be time-consuming and usually involves some form of software. Some software does not requirement any knowledge of coding (e.g, Dexi.io). However, if the data is considered valuable to the observation analysis, such as results by polling station level or voter list information, groups should consider investing in data scraping tools and time allocations in order to collect and convert the data.

## Choosing Type of Data Analysis

Groups should be creative regarding what open election data can tell them about the integrity of the electoral process. Depending on what data sources and processes organizations are examining, open data analysis can provide insights regarding the **competitiveness, inclusiveness, transparency, efficiency,** and **credibility** of the electoral process. Monitoring organizations can draw meaningful conclusions from open election data through the following strategies:

- **Summarizing Data** – Consolidating and summarizing complex datasets or otherwise disaggregated information can help clarify the outcome of certain election procedures, and can demonstrate where deficiencies in the process – or in the data – exist. [Module 3](/en/academy/application-summarizing-the-polling-station-data/) of the Election Data Academy demonstrates how to find summary statistics for a particular variable in a dataset to gain a clear understanding of data at a glance.
- **Qualitative Assessment** – There are a number of qualitative indicators that may be present in open election data. Monitoring groups can use comparative information and democratic standards to help distill and present qualitative conclusions, particularly for data that cannot be quantified (such as legal document analysis). Where possible, however, groups should try to quantify qualitative information that can be gathered from open data – for instance, through percentages, averages, changes-over-time, and numeric comparisons.
- **Quantitative Assessments** – Applying quantitative analysis to open election data can provide the most robust and detailed findings. In some cases, monitoring organizations can combine several datasets to develop a multi-faceted quantitative analysis. For example, combining voter registration data with census data provides insights on the eligible voting population as demonstrated in [Module 7](/en/academy/using-census-data-to-strengthen-voter-registration-analysis/) of the Election Data Academy.

Some data will lend itself more towards qualitative or quantitative analysis, but groups should strive to conduct the most in-depth analysis they can with the data available, applying as many of these strategies as possible for each dataset. Citizen monitors should review [this section](en/guide/key-categories/) of the Election Data Guide to get more information about what kinds of analysis can be conducted for each election category. Groups should also take advantage of the [Data Academy modules](/en/academy/). For additional details on how to analyze particular types of election data, partners can review [NDI manuals](https://www.ndi.org/ndi-publications-election-monitoring) such as _[Building Confidence in the Voter Registration Process](https://www.ndi.org/node/24006)_ and _[The Quick Count and Election Observation](https://www.ndi.org/node/24021)_.

## Finalize Your Plan

> **Different Types of Data**
>
> The term “data” can be used to describe any facts related to the electoral process that are aggregated for the purposes of reference and analysis. Some of this will be statistics, numbers, or rates, while others will be words – such as candidate nomination forms, electoral violence reports, and regulatory frameworks. Groups should be equipped to conduct analysis of many different types of data.

At this point, monitoring organizations should have identified what election processes are a priority to gather open election data for, and whether this data is feasible and viable. Groups should also have conducted a preliminary assessment regarding:

- What desired data can be accessed immediately in a sufficient format and level of granularity;
- What data will need to be requested and in what format and level of granularity;
- What data may need to be ‘scraped’ or converted into a different format;
- Where the data resides;
- When the data will be available; and
- The kind of technological and analytical needs associated with this data.

Based on this information, along with an organization’s monitoring strategy, groups should parse out what data can (and should) be gathered by observers, and what data can be gathered via open official sources. You should be ready to fill out **[Exercise C: Datasets, Sources, Timing, and Requests. ![](/assets/images/assessment/exercise_icon.svg)](/assets/assessment/exercises/Exercise_C.pdf)**

Then, based on your monitoring priorities and objectives, groups should specify a list of observation activities with a corresponding realistic, if not broad, timeline. Plot this out in **[Exercise D: Open Data and Election Observation Activity Timeline ![](/assets/images/assessment/exercise_icon.svg)](/assets/assessment/exercises/Exercise_D.pdf)**. You can use the chart in Exercise D as a guide, which includes some placeholder information as an example.
