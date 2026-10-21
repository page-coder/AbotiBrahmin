```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Website Sitemap | AbotiBrahmin</title>

                <style>
                    * {
                        box-sizing: border-box;
                    }

                    body {
                        margin: 0;
                        background: #f5f7f5;
                        color: #202820;
                        font-family: Arial, Helvetica, sans-serif;
                        line-height: 1.6;
                    }

                    .header {
                        background: #ffffff;
                        border-bottom: 4px solid #16834a;
                        padding: 35px 20px;
                    }

                    .container {
                        max-width: 1050px;
                        margin: auto;
                        padding: 0 20px;
                    }

                    .brand {
                        color: #16834a;
                        font-size: 14px;
                        font-weight: bold;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                    }

                    h1 {
                        margin: 8px 0;
                        font-size: clamp(28px, 5vw, 42px);
                        line-height: 1.2;
                    }

                    .subtitle {
                        color: #657067;
                        margin: 10px 0 0;
                    }

                    .content {
                        padding-top: 30px;
                        padding-bottom: 50px;
                    }

                    .summary {
                        background: #e7f5eb;
                        border: 1px solid #c8e8d0;
                        border-radius: 12px;
                        padding: 18px 20px;
                        margin-bottom: 24px;
                    }

                    .count {
                        font-size: 30px;
                        color: #16834a;
                        font-weight: bold;
                    }

                    .table-wrap {
                        overflow-x: auto;
                        background: #ffffff;
                        border: 1px solid #e0e6e0;
                        border-radius: 12px;
                        box-shadow: 0 4px 18px rgba(0,0,0,0.04);
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        text-align: left;
                    }

                    th {
                        background: #16834a;
                        color: #ffffff;
                        padding: 15px;
                        font-size: 13px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }

                    td {
                        padding: 15px;
                        border-bottom: 1px solid #edf0ed;
                        overflow-wrap: anywhere;
                    }

                    tr:last-child td {
                        border-bottom: none;
                    }

                    tbody tr:hover {
                        background: #f0f9f2;
                    }

                    a {
                        color: #147a42;
                        text-decoration: none;
                        font-weight: 500;
                    }

                    a:hover {
                        text-decoration: underline;
                    }

                    .url {
                        min-width: 280px;
                    }

                    .date {
                        min-width: 150px;
                        color: #657067;
                        font-size: 14px;
                    }

                    .footer {
                        text-align: center;
                        padding: 24px 15px;
                        color: #657067;
                        font-size: 13px;
                        border-top: 1px solid #e0e6e0;
                    }

                    .footer a {
                        font-weight: bold;
                    }

                    @media (max-width: 600px) {
                        .header {
                            padding: 26px 0;
                        }

                        .content {
                            padding-top: 20px;
                        }

                        th, td {
                            padding: 12px;
                        }
                    }
                </style>
            </head>

            <body>
                <header class="header">
                    <div class="container">
                        <div class="brand">AbotiBrahmin Encyclopedia</div>
                        <h1>Website Sitemap</h1>
                        <p class="subtitle">
                            Explore the published pages of this heritage encyclopedia.
                        </p>
                    </div>
                </header>

                <main class="container content">
                    <div class="summary">
                        <div class="count">
                            <xsl:value-of select="count(sm:urlset/sm:url)"/>
                        </div>
                        <div>URLs listed in this sitemap</div>
                    </div>

                    <div class="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Page URL</th>
                                    <th>Last Modified</th>
                                </tr>
                            </thead>

                            <tbody>
                                <xsl:for-each select="sm:urlset/sm:url">
                                    <tr>
                                        <td class="url">
                                            <a>
                                                <xsl:attribute name="href">
                                                    <xsl:value-of select="sm:loc"/>
                                                </xsl:attribute>
                                                <xsl:value-of select="sm:loc"/>
                                            </a>
                                        </td>

                                        <td class="date">
                                            <xsl:choose>
                                                <xsl:when test="sm:lastmod">
                                                    <xsl:value-of select="sm:lastmod"/>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    Not specified
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>

                    <div class="footer">
                        <a href="https://page-coder.github.io/AbotiBrahmin/">
                            Return to AbotiBrahmin
                        </a>
                        <p>XML sitemap presentation</p>
                    </div>
                </main>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
```
