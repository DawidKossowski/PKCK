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
            <xsl:for-each select="twórca/*">
                <xsl:choose>
                    <xsl:when test="name(.) != 'kontakt'">
                        <xsl:if test="name(.)='nazwisko' or name(.)='imię'">
                            <xsl:call-template name="list-element">
                                <xsl:with-param name="bold" select="'bold'"/>
                            </xsl:call-template>
                        </xsl:if>
                        <xsl:if test="name(.)!='nazwisko' and name(.)!='imię'">
                            <xsl:call-template name="list-element" />
                        </xsl:if>
                    </xsl:when>
                    <xsl:otherwise>
                        <fo:list-item margin-bottom="10mm">
                            <fo:list-item-label>
                                <fo:block>Kontakt: </fo:block>
                            </fo:list-item-label>
                            <fo:list-item-body>
                                <xsl:for-each select="*">
                                    <fo:block margin-left="15em" font-style="italic"><xsl:value-of select="."/></fo:block>
                                </xsl:for-each>
                            </fo:list-item-body>
                        </fo:list-item>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:for-each>
        </fo:list-block>

    </xsl:template>
    
    <xsl:template match="/księgarnia/książki">
        <fo:block margin-bottom="3mm" font-size="15pt">Lista książek</fo:block>
        <fo:table>
            <fo:table-header>
                <fo:table-row background-color="lightblue">>
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
                        <xsl:for-each select="*">
                            <fo:table-cell border="solid 1px black">
                                <fo:block>
                                    <xsl:value-of select="."/>
                                </fo:block>
                            </fo:table-cell>
                        </xsl:for-each>
                        
                    </fo:table-row>
                </xsl:for-each>
            </fo:table-body>
        </fo:table>
    </xsl:template>
    
    <xsl:template match="księgarnia/działy">
        <fo:block margin-bottom="3mm" margin-top="25mm" font-size="15pt">Działy</fo:block>
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
                    <fo:table-row border-top="1px solid black" >
                        <fo:table-cell padding-top="2mm" padding-bottom="2mm">
                            <fo:block>
                                <xsl:value-of select="id"/>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell padding-top="2mm" padding-bottom="2mm">
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
        <fo:block margin-bottom="3mm" page-break-before="always" font-size="15pt">Statystyki</fo:block>
        <fo:list-block>
            <xsl:for-each select="ilość-książek">
                <fo:list-item margin-bottom="2pt" margin-top="2pt">
                    <fo:list-item-label>
                        <fo:block font-weight="bold">Ksiazki w kategorii </fo:block>
                    </fo:list-item-label>
                    <fo:list-item-body>
                        <fo:block margin-left="15em" font-weight="bold">Ilosc</fo:block>
                    </fo:list-item-body>
                </fo:list-item>
                
                <xsl:for-each select="*">
                    <xsl:choose>
                        <xsl:when test="name(.)!='język' and name(.)!='dział'">
                            <xsl:call-template name="list-element" />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:for-each select="*">
                                <xsl:call-template name="list-element" />
                            </xsl:for-each>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:for-each>

            </xsl:for-each>
        </fo:list-block>
    </xsl:template>
    
    
    <xsl:template name="list-element">
        <xsl:param name="bold" />
        
        <fo:list-item margin-bottom="2pt">
            <fo:list-item-label>
                <fo:block><xsl:value-of select="concat(upper-case(substring(name(.), 1, 1)), substring(name(.), 2))" /></fo:block>
            </fo:list-item-label>
            <fo:list-item-body>
                <fo:block margin-left="15em">
                    <xsl:if test="$bold">
                        <xsl:attribute name="font-weight">
                            <xsl:text>bold</xsl:text>
                        </xsl:attribute>
                    </xsl:if>
                    <xsl:value-of select="."/>
                </fo:block>
            </fo:list-item-body>
        </fo:list-item>
    </xsl:template>

</xsl:stylesheet>