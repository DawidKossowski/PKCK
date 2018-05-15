<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="text"/>
    
    <xsl:template match="text()">
        <xsl:if test="normalize-space(.)">
            <xsl:value-of select="concat(normalize-space(.), '')"/>
        </xsl:if>
        
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="/księgarnia">
        <xsl:text>&#x9;KSIĘGARNIA&#xA;&#xA;&#xA;</xsl:text>
        
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="/księgarnia/twórcy">
        <xsl:text>&#x9;AUTORZY:&#xA;&#xA;</xsl:text>
        <xsl:for-each select="twórca">
            <xsl:value-of select="concat(./imię, ' ', ./nazwisko, '(', ./indeks, ')', '&#xA;')" />
            <xsl:text>Kontakt:&#xA;</xsl:text>
            <xsl:for-each select="kontakt/*">
                <xsl:value-of select="concat('&#x9;', (.), '&#xA;')"/>
            </xsl:for-each>
            <xsl:text>&#xA;&#xA;</xsl:text>
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template match="/księgarnia/książki">
        <xsl:text>&#x9;KSIĄŻKI:&#xA;&#xA;</xsl:text>
        <xsl:for-each select="książka">
            <xsl:value-of select="concat('&#x9;', ./tytuł, '&#xA;')" />
            
            <xsl:choose>
                <xsl:when test="@dostępna='true'">
                    <xsl:value-of select="concat('Status', '&#x9;&#x9;', 'dostępna', '&#xA;')" />
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="concat('Status', '&#x9;&#x9;', 'niedostępna', '&#xA;')" />
                </xsl:otherwise>
            </xsl:choose>
        
            <xsl:apply-templates select="autorzy" />
            <xsl:value-of select="concat('Język:', '&#x9;&#x9;', ./język, '&#xA;')" />
            <xsl:value-of select="concat('Dział:', '&#x9;&#x9;', ./dział, '&#xA;')" />
            <xsl:value-of select="concat('Rok wydania: ', '&#x9;', ./rok-wydania, '&#xA;')" />
            <xsl:value-of select="concat('Cena:', '&#x9;&#x9;', substring-before(./cena, '.'), 'zł ', substring-after(./cena, '.'), 'gr', '&#xA;')" />
            <xsl:text>&#xA;</xsl:text>
        </xsl:for-each>
        <xsl:text>&#xA;</xsl:text>
    </xsl:template>
    
    <xsl:template match="autorzy">
        <xsl:text>Autorzy:&#x9;</xsl:text>
        <xsl:choose>
            <xsl:when test="autor">
                <xsl:for-each select="autor">
                    <xsl:value-of select="concat(./imię, ' ', ./nazwisko, '    ')" />
                </xsl:for-each>
            </xsl:when>
            <xsl:otherwise>
                <xsl:text>Praca zbiorowa</xsl:text>
            </xsl:otherwise>
        </xsl:choose>
        <xsl:text>&#xA;</xsl:text>
    </xsl:template>
    
    <xsl:template match="/księgarnia/działy">
        <xsl:text>&#x9;DZIAŁY:&#xA;&#xA;</xsl:text>
        <xsl:for-each select="*">
            <xsl:value-of select="concat(./id, ' - ', ./nazwa, '&#xA;')" />
        </xsl:for-each>
        <xsl:text>&#xA;&#xA;</xsl:text>
    </xsl:template>
    
    <xsl:template match="/księgarnia/statystyki">
        <xsl:text>&#x9;STATYSTYKI:&#xA;&#xA;</xsl:text>
        <xsl:text>WARTOŚĆ&#x9;&#x9;ILOŚĆ&#xA;&#xA;</xsl:text>
        <xsl:apply-templates select="ilość-książek" />
        <xsl:value-of select="concat('Działy ', '&#x9;&#x9;', ./ilość-działów, '&#xA;')" />
    </xsl:template>
    
    <xsl:template match="ilość-książek">
        <xsl:text>Książki&#xA;</xsl:text>
        <xsl:value-of select="concat('Wszystkie ', '&#x9;', ./wszystkie, '&#xA;')" />
        <xsl:value-of select="concat('Bieżący rok ', '&#x9;', ./bieżacy-rok, '&#xA;')" />
        <xsl:value-of select="concat('Po polsku ', '&#x9;', ./język/polski, '&#xA;')" />
        <xsl:value-of select="concat('Po angielsku ', '&#x9;', ./język/angielski, '&#xA;')" />
        <xsl:value-of select="concat('Po niemiecku ', '&#x9;', ./język/niemiecki, '&#xA;&#xA;')" />
        <xsl:value-of select="concat('Literatura ', '&#x9;', ./dział/literatura, '&#xA;')" />
        <xsl:value-of select="concat('Naukowe ', '&#x9;', ./dział/naukowe, '&#xA;')" />
        <xsl:value-of select="concat('Podręczniki ', '&#x9;', ./dział/podręczniki, '&#xA;')" />
        <xsl:value-of select="concat('Dziecięce ', '&#x9;', ./dział/dziecięce, '&#xA;')" />
        <xsl:value-of select="concat('Czasopisma ', '&#x9;', ./dział/czasopisma, '&#xA;')" />
        <xsl:value-of select="concat('Komiksy ', '&#x9;', ./dział/komiksy, '&#xA;')" />
    </xsl:template>
    

</xsl:stylesheet>
