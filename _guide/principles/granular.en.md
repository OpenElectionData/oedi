---
title: 'Principle 2: Election data is open when it is granular'
title_short: 'Principle 2: Granular'
lang: en
chapter_id: 11
section: 9
permalink: '/guide/principles/granular/'
---

![Granular](/assets/images/inventory/principles/granular.png)

Election data should be available at the finest possible level of granularity or detail. Data that is finely-grained, or full resolution, is not in an aggregate or modified form. This principle has also been expressed as making data available at the "primary" level or the level at which the source data is collected. Granularity is necessary for promoting transparency and accountability.

In terms of elections, it is clear that the location, address and contact information for each polling station should be released in advance of election day. Citizens need that information so they can find out where to vote. What is less obvious is that polling station-level is the most granular level for election results data. Since the votes are cast at polling stations (sometimes called precincts, polling streams[\[1\]](#footnote-1) or tables[\[2\]](#footnote-2)), polling stations are the primary level for election results. If datasets like election results are only made available in an aggregate or modified form, then that dataset is not open. Indeed, much of the 'fraud' that has been committed in elections is easy to conceal if data is not released at the most granular, or primary, level.

In terms of the voter registration process, the most granular level is the individual voter. While the primary unit of data collection for voter registration is the individual voter, the level at which the data is released varies widely from country to country. EMBs in some countries post a paper copy of the voter list with all of the voter details (first name, last name, address, national ID number) outside of the polling station. Posting a voter list for a specific polling station is granular but the dataset is clearly not complete because it is one part of the entire list for the whole country. In other countries, the full list of voters is available on the EMB's website as multiple files. In that case, the data can be analyzed, for example, to note the number and percentage of women on the list or to see whether other historically marginalized groups are included. Still some other countries state concerns over voter privacy and instead of publishing a voter list, allow voters to lookup their individual details. If the legal framework places restrictions on the granularity of election data (e.g., due to privacy concerns), then the rationale for the restriction should be clearly stated, and the least restrictive means should be used to protect the legitimate interest at issue.

The emerging field of election forensics uses different statistical methods[\[3\]](#footnote-3) to analyze and identify suspicious patterns in data published at the primary level (e.g., polling stations). Additionally, the places used for polling (e.g., administrative buildings, schools, markets) are often the places where voter registration is conducted and complaints are lodged. Thus, access to data at the most granular level is key for citizens and other stakeholders to assess the transparency of most parts of the election process.

> **Questions to help determine what level of data is the primary or source level:**
>
> - Where was the data originally collected? This might give an indication as to the lowest level.
> - What is the lowest level possible where an individual data point might vary from another data point?
> - Is it data related to voting? If so, then polling station is likely the lowest level.
> - It is data related to qualifying to be listed on the ballot or to be registered to vote? If so, then 'individuals' (voters or voters' signatures) is likely the lowest level.

Leaders of the G8 governments explicitly acknowledged the importance of this principle when they signed the [G8 Open Data Charter (and Technical Annex)](https://www.gov.uk/government/publications/open-data-charter/g8-open-data-charter-and-technical-annex#principle-2-quality-and-quantity) in June of 2013. In the Open Data Charter, the governments of Canada, France, Germany, Italy, Japan, Russia, the United States and the United Kingdom commit to releasing high-quality open data and state that the data will be "in their original, unmodified form and **at the finest level of granularity available**."

1.  [](#reference-1)In some African countries such as Malawi and Zambia, the lowest level is called the polling stream and one level up is called the polling station. When we say "polling station" in this document, we mean the lowest level at which the results are cast and counted.
2.  [](#reference-2)In many Latin American countries, the lowest level is called the "mesa" or "table." A voting center (a building) will usually contain several "mesas" (in several rooms within the building). Again, when we use the term "polling station" we mean it is as the lowest level for results and it is interchangeable with the concept of a mesa or table.
3.  [](#reference-3)For example, various digit tests and outlier detection methods have been used to cast suspicion on election results in places such as Russia, Iran, and Ukraine.
