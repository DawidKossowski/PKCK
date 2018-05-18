<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <xsl:output method="xml"
        media-type="image/svg"
        encoding="utf-8"
        doctype-public="-//W3C//DTD SVG 1.1//EN"
        doctype-system="http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"/>
    
    <xsl:template match="/">
        <svg width="1280" height="720" font-family="Consolas">
            <desc>Dane o księgarni</desc>
            <title>Księgarnia</title>
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:rgb(255, 204, 153);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(255, 153, 51);stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <rect width="1280" height="720" fill="url(#gradient1)"/>
            
            <text x="50%" y="30" font-size="20" fill="black" text-anchor="middle">
                Księgarnia
            </text>
            
            <a xlink:href="wynikowy.pdf" target="_blank">
                <g class="btn" cursor="pointer">
                    <rect x="1160" y="680" width="100" height="25" fill="#ffcc99" stroke="black"/>
                    <text x="1188" y="697" fill="black" font-size="16">PDF</text>
                </g>
            </a>
            
            <script type="text/ecmascript">
                <![CDATA[
                    function onMouseOverContracts(evt, name) {
                        var numbers = document.getElementById(name);
                        numbers.setAttribute("visibility", "visible");
                    }
                ]]>
            </script>
            
            <script type="text/ecmascript">
                <![CDATA[
                    function onMouseOutContracts(evt, name) {
                        var numbers = document.getElementById(name);
                        numbers.setAttribute("visibility", "hidden");
                    }
                ]]>
            </script>
            
            <script type="text/ecmascript">
                <![CDATA[
                    function onClickAuthors(evt) {
                        var authors = document.getElementById("authors");
                        var visibility = authors.getAttribute("visibility");
                        if(visibility === "visible") {
                            authors.setAttribute("visibility", "hidden");
                        } else {
                            authors.setAttribute("visibility", "visible");
                        }
                    }
                ]]>
            </script>
            
            <xsl:apply-templates/>
            
        </svg>
    </xsl:template>
    
    <xsl:template  match="/księgarnia/twórcy" >
        <g id="authors-main" class="btn" onclick="onClickAuthors(evt)" cursor="pointer">
            <rect x="20" y="680" width="100" height="25" fill="#ffcc99" stroke="black"/>
            <text x="35" y="697" fill="black" font-size="16" >Autorzy</text>
        </g>
        <g id="authors" visibility="hidden">
            <rect x="135" y="680" width="550" height="25" fill="#ffcc99" stroke="black"/>
            <xsl:apply-templates/>
        </g>
    </xsl:template>
    
    <xsl:template match="/księgarnia/twórcy/twórca">
        <text>
            <xsl:attribute name="x">
                <xsl:variable name="mylength" select="(position()-2)*(string-length(concat(imię,' ',nazwisko,' (',indeks,')')))"/>
                <xsl:value-of select="(6*$mylength)+150"/>
            </xsl:attribute>
            <xsl:attribute name="y">
                <xsl:text>697</xsl:text>
            </xsl:attribute>
            <xsl:attribute name="fill">
                <xsl:text>black</xsl:text>
            </xsl:attribute>
            <xsl:attribute name="font-size">
                <xsl:text>16</xsl:text>
            </xsl:attribute>
            <xsl:value-of select="concat(imię,' ',nazwisko,' (',indeks,')')"/>
        </text>
    </xsl:template>
    
    <xsl:template match="/księgarnia/statystyki">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="/księgarnia/statystyki/ilość-książek/język">
        <g id="conrect" onmouseover="onMouseOverContracts(evt, 'numbersForContracts')" onmouseout="onMouseOutContracts(evt, 'numbersForContracts')">
            <rect x="340" y="60" width="600" height="250" fill="#ffcc99" stroke="black" />
            
            <text x="50%" y="80" fill="black" text-anchor="middle">Książki w danym języku</text>
            <text x="40%" y="300" fill="black" text-anchor="middle">Polski</text>
            <text x="50%" y="300" fill="black" text-anchor="middle">Angielski</text>
            <text x="60%" y="300" fill="black" text-anchor="middle">Niemiecki</text>
        </g>
        
        <g id="numbersForContracts" visibility="hidden" >
            <xsl:for-each select="*">
                <text>
                    <xsl:attribute name="x">
                        <xsl:variable name="myposition" select="position()-1" />
                        <xsl:value-of select="(125*$myposition)+508"/>
                    </xsl:attribute>
                    <xsl:attribute name="y">
                        <xsl:variable name="mycount" select="."/>
                        <xsl:value-of select="205-($mycount*5)"/>
                    </xsl:attribute>
                    <xsl:attribute name="fill">
                        <xsl:text>black</xsl:text>
                    </xsl:attribute>
                    <xsl:attribute name="font-size">
                        <xsl:text>16</xsl:text>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </text>
            </xsl:for-each>
        </g>
        
        <xsl:for-each select="*">
            <rect>
                <xsl:attribute name="onmouseover">
                    <xsl:text>onMouseOverContracts(evt, 'numbersForContracts')</xsl:text>
                </xsl:attribute>
                <xsl:attribute name="x">
                    <xsl:variable name="mypos" select="position()-1"/>
                    <xsl:value-of select="(125*$mypos)+490"/>
                </xsl:attribute>
                <xsl:attribute name="width">
                    <xsl:text>50</xsl:text>
                </xsl:attribute>
                <xsl:attribute name="height">
                    <xsl:text>300</xsl:text>
                </xsl:attribute>
                <xsl:attribute name="fill">
                    <xsl:text>#ff3300</xsl:text>
                </xsl:attribute>
                <xsl:variable name="mycount" select="."/>
                <animate attributeName="y" from="270" to="{270-$mycount*7.5}" dur="5s" fill="freeze"/>
                <animate attributeName="height" from="1" to="{$mycount*7.5}" dur="5s" fill="freeze"/>
            </rect>
        </xsl:for-each>
        
    </xsl:template>
    
    <xsl:template match="/księgarnia/statystyki/ilość-książek/dział">
        <g id="emprect" onmouseover="onMouseOverContracts(evt, 'numbersForEmployments')" onmouseout="onMouseOutContracts(evt, 'numbersForEmployments')">
            <rect x="240" y="360" width="800" height="250" fill="#ffcc99" stroke="black" />
            
            <text x="50%" y="380" fill="black" text-anchor="middle">Książki w danym dziale</text>
            <text x="25%" y="600" fill="black" text-anchor="middle">Literatura</text>
            <text x="35%" y="600" fill="black" text-anchor="middle">Naukowe</text>
            <text x="45%" y="600" fill="black" text-anchor="middle">Podręczniki</text>
            <text x="55%" y="600" fill="black" text-anchor="middle">Dziecięce</text>
            <text x="65%" y="600" fill="black" text-anchor="middle">Czasopisma</text>
            <text x="75%" y="600" fill="black" text-anchor="middle">Komiksy</text>
        </g>
        
        <g id="numbersForEmployments" visibility="hidden" >
            <xsl:for-each select="*">
                <text>
                    <xsl:attribute name="x">
                        <xsl:variable name="myposition" select="position()-1" />
                        <xsl:value-of select="(125*$myposition)+318"/>
                    </xsl:attribute>
                    <xsl:attribute name="y">
                        <xsl:variable name="mycount" select="."/>
                        <xsl:value-of select="505-($mycount*5)"/>
                    </xsl:attribute>
                    <xsl:attribute name="fill">
                        <xsl:text>black</xsl:text>
                    </xsl:attribute>
                    <xsl:attribute name="font-size">
                        <xsl:text>16</xsl:text>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </text>
            </xsl:for-each>
        </g>
        
        <xsl:for-each select="*">
            <rect>
                <xsl:attribute name="onmouseover">
                    <xsl:text>onMouseOverContracts(evt, 'numbersForContracts')</xsl:text>
                </xsl:attribute>
                <xsl:attribute name="x">
                    <xsl:variable name="mypos" select="position()-1"/>
                    <xsl:value-of select="(125*$mypos)+300"/>
                </xsl:attribute>
                <xsl:attribute name="width">
                    <xsl:text>50</xsl:text>
                </xsl:attribute>
                <xsl:attribute name="height">
                    <xsl:text>300</xsl:text>
                </xsl:attribute>
                <xsl:attribute name="fill">
                    <xsl:text>#ff3300</xsl:text>
                </xsl:attribute>
                <xsl:variable name="mycount" select="."/>
                <animate attributeName="y" from="570" to="{570-$mycount*7.5}" dur="5s" fill="freeze"/>
                <animate attributeName="height" from="1" to="{$mycount*7.5}" dur="5s" fill="freeze"/>
            </rect>
        </xsl:for-each>
    </xsl:template>
    
    

</xsl:stylesheet>
