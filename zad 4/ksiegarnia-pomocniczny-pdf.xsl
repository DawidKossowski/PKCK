<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:fo="http://www.w3.org/1999/XSL/Format">
    <xsl:output indent="yes" method="xml" encoding="utf-8"/>
    
    <xsl:template match="/">
        <fo:root>
            <fo:layout-master-set>
                <fo:simple-page-master master-name="default" margin-left="2cm" margin-right="2cm" margin-top="15mm" margin-bottom="15mm">
                    <fo:region-body/>
                </fo:simple-page-master>
            </fo:layout-master-set>
            
            <fo:page-sequence master-reference="default">
                <fo:flow flow-name="xsl-region-body">
                    <xsl:apply-templates />
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>
    
    <xsl:template match="/księgarnia/twórcy">
        <fo:list-block>
            <xsl:for-each select="twórca">
                <fo:list-item>
                    <fo:list-item-label>
                        <fo:block>Imię: </fo:block>
                    </fo:list-item-label>
                    <fo:list-item-body>
                        <fo:block margin-left="15em" font-weight="bold"><xsl:value-of select="imię"/></fo:block>
                    </fo:list-item-body>
                </fo:list-item>
                <fo:list-item>
                    <fo:list-item-label>
                        <fo:block>Nazwisko: </fo:block>
                    </fo:list-item-label>
                    <fo:list-item-body>
                        <fo:block margin-left="15em" font-weight="bold"><xsl:value-of select="nazwisko"/></fo:block>
                    </fo:list-item-body>
                </fo:list-item>
                <fo:list-item>
                    <fo:list-item-label>
                        <fo:block>Semestr: </fo:block>
                    </fo:list-item-label>
                    <fo:list-item-body>
                        <fo:block margin-left="15em"><xsl:value-of select="semestr"/></fo:block>
                    </fo:list-item-body>
                </fo:list-item>
                <fo:list-item>
                    <fo:list-item-label>
                        <fo:block>Indeks: </fo:block>
                    </fo:list-item-label>
                    <fo:list-item-body>
                        <fo:block margin-left="15em"><xsl:value-of select="indeks"/></fo:block>
                    </fo:list-item-body>
                </fo:list-item>
                
                <fo:list-item margin-bottom="10mm">
                    <fo:list-item-label>
                        <fo:block>Kontakt: </fo:block>
                    </fo:list-item-label>
                    <fo:list-item-body>
                        <xsl:for-each select="kontakt/*">
                            <fo:block margin-left="15em"><xsl:value-of select="."/></fo:block>
                        </xsl:for-each>
                    </fo:list-item-body>
                </fo:list-item>
            </xsl:for-each>
        </fo:list-block>

    </xsl:template>
    
    <xsl:template match="/księgarnia/książki">
        <fo:block margin-bottom="3mm">Lista książek</fo:block>
        <fo:table>
            <fo:table-header>
                <fo:table-row>
                    <xsl:for-each select="książka[1]/*">
                        <fo:table-cell font-weight="bold" border="solid 1px black">
                            <fo:block>
                                <xsl:value-of select="concat(upper-case(substring(name(.), 1, 1)), substring(name(.), 2))" />
                            </fo:block>
                        </fo:table-cell>
                    </xsl:for-each>
                </fo:table-row>
            </fo:table-header>
            
            <fo:table-body>
                <xsl:for-each select="książka">
                    <fo:table-row>
                        <fo:table-cell border="solid 1px black">
                            <fo:block>
                                <xsl:value-of select="tytuł"/>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell border="solid 1px black">
                            <fo:block>
                                <xsl:apply-templates select="autorzy"/>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell border="solid 1px black">
                            <fo:block>
                                <xsl:value-of select="język"/>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell border="solid 1px black">
                            <fo:block>
                                <xsl:value-of select="dział"/>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell border="solid 1px black">
                            <fo:block>
                                <xsl:value-of select="rok-wydania"/>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell border="solid 1px black">
                            <fo:block>
                                <xsl:value-of select="format-number(cena, '#.00####')"/>
                            </fo:block>
                        </fo:table-cell>
                    </fo:table-row>
                </xsl:for-each>
            </fo:table-body>
        </fo:table>
    </xsl:template>
    
    <xsl:template match="księgarnia/działy">
        <fo:block margin-bottom="3mm" margin-top="20mm">Działy</fo:block>
        <fo:table width="5cm">
            <fo:table-header>
                <fo:table-row>
                    <xsl:for-each select="definicja-działu[1]/*">
                        <fo:table-cell font-weight="bold">
                            <fo:block>
                                <xsl:value-of select="concat(upper-case(substring(name(.), 1, 1)), substring(name(.), 2))" />
                            </fo:block>
                        </fo:table-cell>
                    </xsl:for-each>
                </fo:table-row>
            </fo:table-header>
            <fo:table-body>
                <xsl:for-each select="definicja-działu">
                    <fo:table-row border-top="1px solid black">
                        <fo:table-cell>
                            <fo:block>
                                <xsl:value-of select="id"/>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell>
                            <fo:block>
                                <xsl:value-of select="nazwa"/>
                            </fo:block>
                        </fo:table-cell>
                    </fo:table-row>
                </xsl:for-each>
            </fo:table-body>
        </fo:table>
    </xsl:template>
    
    <xsl:template match="/księgarnia/statystyki">
        <fo:block margin-bottom="3mm" margin-top="20mm">Statystyki</fo:block>
        <fo:list-block>
            <xsl:for-each select="ilość-książek">
                <fo:list-item>
                    <fo:list-item-label>
                        <fo:block font-weight="bold">Wartosc: </fo:block>
                    </fo:list-item-label>
                    <fo:list-item-body>
                        <fo:block margin-left="15em" font-weight="bold">Ilosc</fo:block>
                    </fo:list-item-body>
                </fo:list-item>
                
                <xsl:for-each select="język/*">
                    <fo:list-item>
                        <fo:list-item-label>
                            <fo:block><xsl:value-of select="name(.)" /></fo:block>
                        </fo:list-item-label>
                        <fo:list-item-body>
                            <fo:block margin-left="15em"><xsl:value-of select="."/></fo:block>
                        </fo:list-item-body>
                    </fo:list-item>
                </xsl:for-each>
                
                <xsl:for-each select="dział/*">
                    <fo:list-item>
                        <fo:list-item-label>
                            <fo:block><xsl:value-of select="name(.)" /></fo:block>
                        </fo:list-item-label>
                        <fo:list-item-body>
                            <fo:block margin-left="15em"><xsl:value-of select="."/></fo:block>
                        </fo:list-item-body>
                    </fo:list-item>
                </xsl:for-each>
            </xsl:for-each>
        </fo:list-block>
    </xsl:template>

</xsl:stylesheet>